export const otpEmailTemplate = (otp) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Your OTP Code</title>
</head>
<body style="background-color:#f3f4f6; font-family: Arial, sans-serif; padding:20px;">
  <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden;">
    
    <div style="background:#4f46e5; padding:24px;">
      <h1 style="color:#ffffff; text-align:center; margin:0;">Your OTP Code</h1>
    </div>

    <div style="padding:32px;">
      <p style="color:#374151;">Hello,</p>
      <p style="color:#374151;">
        Your One-Time Password (OTP) for account verification is:
      </p>

      <div style="background:#f3f4f6; padding:16px; border-radius:6px; margin:24px 0;">
        <p style="font-size:32px; font-weight:bold; text-align:center; color:#4f46e5; margin:0;">
          ${otp}
        </p>
      </div>

      <p style="color:#374151;">
        This OTP is valid for <strong>5 minutes</strong>. Please do not share this code with anyone.
      </p>

      <p style="color:#374151;">
        If you didn't request this code, please ignore this email.
      </p>

      <p style="color:#374151;">Thank you for using our service!</p>
    </div>

    <div style="background:#f3f4f6; padding:16px;">
      <p style="font-size:12px; color:#6b7280; text-align:center; margin:0;">
        © 2024 Your Company Name. All rights reserved.
      </p>
    </div>

  </div>
</body>
</html>
`;
//# sourceMappingURL=otpEmailTemplate.js.map