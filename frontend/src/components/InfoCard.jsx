import React from 'react'
import {Buffer} from 'buffer'

export default function InfoCard(props) {
  const info = props.info;
  // info = {name, position, facebook_id, email_id, image, phone_number}
  console.log(info);
  return (
    <div className="probootstrap-teacher text-center probootstrap-animate fadeInUp probootstrap-animated">
      <figure className="media">
        <img
          src={`data:${info.image.contentType};base64,${Buffer.from(
            info.image.data ? info.image.data : ""
          ).toString("base64")}`}
          alt=""
          className="img-responsive"
        />
      </figure>
      <div className="text">
        <h3>{info.name}</h3>
        <p>{`${info.position} Secretary`}</p>
        <ul className="probootstrap-footer-social">
          {info.facebook_id !== "" && (
            <li className="facebook">
              <a href={info.facebook_id}>
                <i className="icon-facebook2" />
              </a>
            </li>
          )}
          {info.email_id !== "" && (
            <li className="facebook">
              <a href={`mailto:${info.email_id}`}>
                <i className="icon-email" />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
