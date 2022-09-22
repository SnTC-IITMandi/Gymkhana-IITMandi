import React from 'react'

export default function InfoCard(props) {
    const info = props.info;
    // info = {name, position, facebook_id, email_id, image, phone_number}

  return (
    <div className="col-md-3 col-sm-6">
      <div className="probootstrap-teacher text-center probootstrap-animate  fadeInUp probootstrap-animated">
        <figure className="media">
          <img src={info.image} alt="" className="img-responsive" />
        </figure>
        <div className="text">
          <h3>{info.name}</h3>
          <p>{info.position}</p>
          <ul className="probootstrap-footer-social">
            {info.facebook_id !== "" && <li className="facebook">
              <a href={info.facebook_id}>
                <i className="icon-facebook2" />
              </a>
            </li>}
            {info.email_id !== "" && <li className="facebook">
              <a href={`mailto:${info.email_id}`}>
                <i className="icon-email" />
              </a>
            </li>}
          </ul>
        </div>
      </div>
    </div>
  );
}
