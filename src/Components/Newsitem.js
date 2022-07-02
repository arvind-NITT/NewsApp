import React from "react";

export default function Newsitem(props) {
  
    let {Title, description,imageUrl,newsitem,author,publishedAt} = props;
  
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://www.coindesk.com/resizer/M4GFO80vmW3rKsPmYdxBwtyyg0s=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZWHVEKCPGFF6BLDOGVGNO6IKTA.jpeg":imageUrl} className="card-img-top" alt=".."  />
          <div className="card-body">
            <h5 className="card-title">{Title}</h5>
            <p className="card-text">
            {description}
            </p>
            <p className="card-text"><small className="text-muted">By {!author?"Arvind":author} on {new Date(publishedAt).toUTCString()}</small></p>
            <a rel="noreferrer" href={newsitem} target="_blank" className="btn btn-primary">
             Read More
            </a>
          </div>
        </div>
        
      </div>
    );

}
