import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, packageInterest, message, source_path, metadata } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Name, email, and message are required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const sponsorInquiryTo = Deno.env.get("SPONSOR_INQUIRY_TO") || "matt@freedominterventions.com";

    if (!supabaseUrl || !serviceRoleKey) throw new Error("Supabase service role is not configured");
    if (!resendApiKey) throw new Error("RESEND_API_KEY is not configured");

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { error: insertError } = await supabase.from("party_wreckers_advertiser_inquiries").insert({
      name,
      email,
      company: company || null,
      message,
      source_path: source_path || null,
      metadata: {
        ...(metadata || {}),
        package_interest: packageInterest || metadata?.package_interest || null,
      },
    });

    if (insertError) throw insertError;

    const emailResult = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Party Wreckers Sponsors <onboarding@resend.dev>",
        to: [sponsorInquiryTo],
        subject: `Sponsor inquiry: ${company || name}`,
        reply_to: email,
        html: `
          <h2>New Party Wreckers sponsor inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Package interest:</strong> ${packageInterest || metadata?.package_interest || "Not provided"}</p>
          <p><strong>Source path:</strong> ${source_path || "Not provided"}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${String(message).replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!emailResult.ok) {
      throw new Error(`Failed to send sponsor email: ${await emailResult.text()}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
