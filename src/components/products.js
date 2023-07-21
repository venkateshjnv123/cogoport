import React from "react";
import "./products.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Products() {
  const data1 = [
    {
      name: "End to End Cross Border Logistics",
      array1: [
        "Ocean: FCL",
        "Ocean:LCL",
        "International Air",
        "Customs, CFS, & Handling",
      ],
    },
    {
      name: "Domestic Logistics",
      array1: ["FTL, PTL", "Trailer & Rail Container Haulage"],
    },
    {
      name: "Supply Chain Solutions",
      array1: [
        "CogoAssured",
        "Domestic Fulfilment",
        "Door to Door Shipments",
        "Cargo Insurance",
      ],
    },
    { name: "Financial Services", array1: ["Pay Later", "Export Factoring"] },
    {
      name: "Trade Management Solutions",
      array1: [
        "Freight Rates & Schedules",
        "Quick Premium Quotations",
        "Duties & Taxes Calculator",
        "Tracking & Visibility",
      ],
    },
  ];
  return (
    <div>
      <div className="curveContainer">
        <div className="curveSub"></div>
      </div>
      <div className="products">
        <div className="purpose" style={{ paddingTop: "40px" }}>
          <div className="purposeSub">
            <div className="purposeItems purposeItem1 text-start">
              <h2 className="fw-bold">
                One Stop Solution for Your Supply Chain
              </h2>
              <span>
                Connected Shipping, Finance, and Trade-tech, to Power Global
                Trade and Supply Chains.
              </span>
            </div>
            <div className="purposeItems purposeItem2">
              <img
                alt="Product"
                src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fmap-supply-chain.png&w=384&q=75"
              />
            </div>
          </div>
        </div>

        <div className="prodContainer">
          <h2 className="ourProducts fw-bold">Our Products</h2>
          <div className="productSub">
            {data1.map((prod) => (
              <div className="prodRow">
                <h4 className="prodText">{prod.name}</h4>
                <div className="prodCol">
                  {prod.array1.map((item) => (
                    <a href="null">
                      <div className="card prodCard">
                        <img
                          className="prodPic"
                          src="https://www.cogoport.com/images/manufactoring.svg"
                          width="62"
                          height="62"
                          alt="Ocean"
                        />
                        <h5 className="prodTitle">{item}</h5>
                        <h6 className="prodMore">
                          Find Out More
                          <ArrowRightAltIcon
                            sx={{
                              width: "1em",
                              height: "1em",
                              color: "#ee3425",
                            }}
                          />{" "}
                        </h6>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
