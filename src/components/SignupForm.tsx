
import React from 'react';

interface SignupFormProps {
  isDarkBackground?: boolean;
  verticalLayout?: boolean;
}

const SignupForm: React.FC<SignupFormProps> = ({ 
  isDarkBackground = false,
  verticalLayout = false
}) => {
  return (
    <div className="w-full mx-auto">
      <form 
        action="https://app.kit.com/forms/7946937/subscriptions" 
        className="seva-form formkit-form" 
        method="post" 
        data-sv-form="7946937" 
        data-uid="c8f30abd0d" 
        data-format="inline" 
        data-version="5" 
        data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" 
        min-width="400 500 600 700 800"
      >
        <div data-style="clean">
          <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
          <div 
            data-element="fields" 
            data-stacked={verticalLayout ? "true" : "false"} 
            className={`seva-fields formkit-fields ${verticalLayout ? 'flex flex-col gap-3' : ''}`}
          >
            <div className="formkit-field">
              <input 
                className="formkit-input" 
                name="email_address" 
                aria-label="Email Address" 
                placeholder="Email Address" 
                required 
                type="email" 
                style={{ 
                  color: "rgb(0, 0, 0)", 
                  borderColor: "rgb(227, 227, 227)", 
                  borderRadius: "4px", 
                  fontWeight: 400,
                  width: "100%",
                  padding: "8px 12px"
                }}
              />
            </div>
            <button 
              data-element="submit" 
              className={`formkit-submit formkit-submit ${verticalLayout ? 'w-full' : ''}`}
              style={{ 
                color: "rgb(255, 255, 255)", 
                backgroundColor: "rgb(26, 31, 44)", 
                borderRadius: "4px", 
                fontWeight: 700,
                padding: "8px 12px",
                whiteSpace: "nowrap"
              }}
            >
              <div className="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span className="">Get Instant Access</span>
            </button>
          </div>
          <div className="formkit-powered-by-convertkit-container">
            <a 
              href="https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic" 
              data-element="powered-by" 
              className="formkit-powered-by-convertkit" 
              data-variant="dark" 
              target="_blank" 
              rel="nofollow"
            >
              Built with Kit
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
