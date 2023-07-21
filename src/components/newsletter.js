import React from "react";
import "./newsletter.css";
import "./footer1.css";
import "./footer2.css";
import "./copyright.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Padding } from "@mui/icons-material";
function Newsletter() {
  const data1 = [
    {
      name: "Products",
      arra: [
        {
          name: "Cross-border Logistic",
          array2: [
            "Ocean: FCL",
            "Ocean: LCL",
            "International Air",
            "Customs, CFS, and Handling",
          ],
        },
        {
          name: "Domestic Logistics",
          array2: [
            "Surface: FTL, PTL, Rail",
            "Trailer & Rail Container Haulage",
          ],
        },
        {
          name: "Trade Management Solutions",
          array2: [
            "Freight Rates & Schedules",
            "Quick Premium Quotations",
            " Duties & Taxes Calculator",
            "Tracking & Visibility",
          ],
        },
        {
          name: "CogoMaps",
          array2: [
            "Shipment Planner",
            "Trade Info",
            "Global Routes",
            "Live Congestion",
          ],
        },
        {
          name: "Financial Services",
          array2: ["Pay Later", "Export Factoring", "CogoFx"],
        },
        {
          name: "Supply Chain Solutions",
          array2: [
            "CogoAssured",
            "Fulfilment Logistics",
            "Door to Door Shipments",
            "Cargo Insurance",
          ],
        },
      ],
    },
    {
      name: "Partners",
      arra: [
        {
          name: "Our Logistics Providers",
          array2: ["Freight Forwarders", "Transporters", "Custom Agents"],
        },
        {
          name: "Partnership Program",
          array2: ["Channel Partners", "Overseas Agents"],
        },
      ],
    },
    {
      name: "Tools",
      arra: [
        {
          name: "Tools",
          array2: [
            "Rate Discovery",
            "Freight Rate Trends",
            "Tracking",
            "HS Code Finder",
            "Personal Trade Assistant",
          ],
        },
      ],
    },
    {
      name: "Company",
      arra: [
        {
          name: "Company",
          array2: [
            "About us",
            "Careers",
            "Newsroom",
            "Leadership",
            "Login",
            "Sign Up",
          ],
        },
      ],
    },
    {
      name: "Knowledge Center",
      arra: [
        {
          name: "Resources",
          array2: [
            "Port info",
            "Shipping Terms",
            "Help Center",
            "Incoterms",
            "Blogs",
            "News & Updates",
            "Events",
            "Reports",
            "Notifications",
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <div className="curveContainer2">
        <div className="curveSub2"></div>
        <div className="newsContainer">
          <div className="newsimgCon">
            <img
              className="newsImg"
              src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fcogoport-subscribe.png&w=256&q=75"
              alt="Newsletter"
            />
          </div>
          <div>
            <h3 className="subText">Subscribe to our newsletter now!</h3>
            <h6 className="subText2">
              Don’t miss out on the latest happenings at Cogoport.
            </h6>
            <div className="newsformCon">
              <form className="newsForm">
                <div>
                  <input
                    className="newsInput"
                    type="email"
                    placeholder="Enter your email here"
                  />
                </div>
                <div>
                  <button className="newsSubmit" type="submit">
                    Subscribe{" "}
                    <ArrowRightAltIcon sx={{ width: "1em", height: "1em" }} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer1 starts */}
        <div className="foot1Container">
          {data1.map((item) => (
            <div className="foot1Col">
              <h3 className="foot1Title">{item.name}</h3>
              {item.arra.map((kum) => (
                <div className="foot1Bottom">
                  <div className="foot1Text">
                    <h5>{kum.name}</h5>
                  </div>
                  {kum.array2.map((item2) => (
                    <a target="_blank" className="footmaintext">
                      {item2}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Footer1 ends */}

        {/* Footer2 starts */}
        <div className="foot2Container">
          <div className="foot2colContainer">
            <div className="foot2Col">
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
            </div>
            <div className="foot2Col">
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
            </div>
            <div className="foot2Col">
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
              <a href="null">Kakinada to Tema</a>
            </div>
          </div>
        </div>

        {/* Footer2 ends */}

        {/* Copyright starts */}

        <div className="copyContainer">
          <div className="copyCol1">
            <span className="copycolText">
              © 2023 Cogo Universe PTE. All rights reserved.
            </span>
            <ul className="copycolText">
              <li role="presentation" className="copyLi">
                <a href="null">Terms and Conditions |</a>
              </li>
              <li role="presentation" className="copyLi">
                <a href="null">Cookie policy |</a>
              </li>
              <li role="presentation" className="copyLi">
                <a href="null">Privacy and Data Protection Policy</a>
              </li>
            </ul>
          </div>

          <div className="copyCol2">
            <div style={{ marginRight: "5px" }}>
              <img
                src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fglobe.png&w=32&q=75"
                alt="Lang"
                width="20"
                height="20"
              />
            </div>
            <div className="copyLang">English (IN)</div>
            <div className="copyrightlogos">
              <LinkedInIcon />
              <FacebookIcon />
              <InstagramIcon />
            </div>
            <div className="copyRight"></div>
          </div>
        </div>

        {/* Copyright ends */}
      </div>
    </div>
  );
}

export default Newsletter;
