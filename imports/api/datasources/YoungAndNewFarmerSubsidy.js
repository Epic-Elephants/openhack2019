export const Data = {
  "Application":{
    "title": ["Young and New Farmer application"],
    "id": 1,
    "sections": [
      {
        "id": 2,
        "title": ["Applicant Details"],
        "questions": [
          {
            "id": 3,
            "title": ["Beneficiary / Business name"],
            "type": "string",
            "simple_description": "The person or entity that will receive money through this application if successful",
            "attachment_enabled": false,
            "notes_enabled": false,
            "signature_item": false,
            "rules": {
              "regex": "regex"
            }
          },
          {
            "id": 4,
            "title": ["Applicants full name"],
            "type": "string",
            "simple_description": "",
            "attachment_enabled": false,
            "notes_enabled": false,
            "signature_item": false,
            "rules": {
              "regex": "regex"
            }
          },
          {
            "id": 5,
            "title": ["SBI"],
            "type": "string",
            "simple_description": "SBI is your Single Business Identifier number, this number is on your business registration certificate from Companies House",
            "attachment_enabled": false,
            "notes_enabled": false,
            "signature_item": false,
            "rules": {
              "regex": "regex"
            }
          },
          {
            "id": 6,
            "title": ["Business address"],
            "type": "string",
            "simple_description": "Write down the full address for your business",
            "attachment_enabled": false,
            "notes_enabled": false,
            "signature_item": false,
            "rules": {
              "regex": "regex"
            }
          }
        ]
        },
      {
        "id": 7,
        "title": ["Apply for BPS entitlements"],
        "questions": [
          {
            "id": 8,
            "title": ["I want to apply for BPS entitlements as a"],
            "type": "radio",
            "choices": [
              ["Young farmer"],
              ["New farmer"],
              ["N/A"]
            ],
            "simple_description": "Fill in this part if you want to apply for BPS entitlements Basic payment scheme. You must also ask a registered accountant or solicitor to fill in and sign the certificate at the end of this form.",
            "attachment_enabled": false,
            "notes_enabled": false,
            "signature_item": false,
            "rules": {
              "regex": "regex"
            }
          },
          {
            "id": 9,
            "title": ["Young farmer payment - proof"],
            "questions": {
              "id": 10,
              "title": ["Beneficiary / Business name"],
              "type": "radio",
              "choices": [
                ["I am supplying proof for the young farmer payment"],
                ["I have previously, successfully applied for BPS and therefore don't need to supply a new certificate"]
              ],
              "simple_description": "Please see page 92 of the ‘Basic Payment Scheme: rules for 2019’, for more information. https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/814208/BPS_2019_scheme_rules_v2.0.pdf Also ask a registered accountant or solicitor to fill in the certificate at the end of this form.",
              "attachment_enabled": true,
              "notes_enabled": true,
              "signature_item": false,
              "rules": {
                "regex": "regex",
                "show_if": "{\"section\": 7,\"question\": 8,\"value\": \"Young Farmer\"}"
              }
            }
          }
        ]
      },
      {
        "id": 11,
        "title": ["Declaration - you or your representative must fill in this"],
        "questions": [
          {
            "id": 12,
            "title": ["Signed"],
            "type": "string",
            "simple_description": "By signing this declaration I confirm I have read and understood all of the relevant guidance information, and confirm that all the details given in this form are true, accurate and completed to the best of my knowledge and belief.If signing as an appointed representative you also confirm you have the appropriate permission to represent the beneficiary and that you have made the beneficiaries aware that they are responsible for complying with the guidance and regulations. A registered accountant or solicitor will need to fill in and sign the certificate at the end of this form. You need to provide them with the relevant supporting documents. Part C - Young farmer payment - proofFill in this part if you’re applying for the young farmer payment in your main BPS 2019 application.Put an ‘X’ in the relevant box below – one box only. I am supplying proof for the young farmer paymentN/AAlso ask a registered accountant or solicitor to fill in the certificate at the end of this form. (However if young farmers have previously applied for the young farmer payment and were successful, they may not need to provide a new version of the certificate.  Please see page 92 of the ‘Basic Payment Scheme: rules for 2019’, for more information).All relevant parts of this form - including the signed certificate - must be completed before you send it to RPA.",
            "attachment_enabled": false,
            "notes_enabled": false,
            "signature_item": true,
            "rules": {
              "regex": "regex"
            }
          },
          {
            "id": 13,
            "title": ["Print full name(s)"],
            "type": "string",
            "simple_description": "",
            "attachment_enabled": false,
            "notes_enabled": false,
            "signature_item": false,
            "rules": {
              "regex": "regex"
            }
          },
          {
            "id": 14,
            "title": ["Date"],
            "type": "date",
            "simple_description": "",
            "attachment_enabled": false,
            "notes_enabled": false,
            "signature_item": false,
            "rules": {
              "regex": "regex"
            }
          },
          {
            "id": 15,
            "title": ["CRN number (if known)"],
            "type": "string",
            "simple_description": "This is your company registration number",
            "attachment_enabled": false,
            "notes_enabled": false,
            "signature_item": false,
            "rules": {
              "regex": "regex"
            }
          },
          {
            "id": 15,
            "title": ["Relationship to beneficiary"],
            "type": "string",
            "simple_description": "For example, agent, partner, owner director or sole trader",
            "attachment_enabled": false,
            "notes_enabled": false,
            "signature_item": false,
            "rules": {
              "regex": "regex"
            }
          }
        ]
      }
    ]
  }
};
