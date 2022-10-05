import React, { useState } from "react";
// import styles from './contact.css';
import Navbar from "./Navbar";

function Hostel({hostels}){
  <section id="content5">
				<div align="center">
				</div>
				<div style="overflow-x: scroll;">
					<table className="table">
						<tbody>
							<tr>
								<th className='tg-i6ua'>Hostel<br/></th>
								<th className='tg-03to'>Hostel Secretary<br/></th>
								<th className='tg-03to'>Post</th>
								<th className='tg-03to'>Email ID</th>
								<th className='tg-03to'></th>
								<th className='tg-kr4b'>Warden & Asst. Warden</th>
								<th className='tg-03to'>E-mail ID</th>
							</tr>
              {hostels.map(hostel=>{
                return<>
                <tr>
								<td className='tg-i6ua'><br/></td>
								<td className='tg-03to'><br/></td>
								<td className='tg-03to'></td>
								<td className='tg-03to'></td>
								<td className='tg-03to'></td>
								<td className='tg-kr4b'></td>
								<td className='tg-03to'></td>
							</tr>
              {hostel.secretaries.map((secretary,index)=>{
                return <tr>
								<td className='tg-i6ua'>{index===0 && hostel.hostel_name}<br/></td>
								<td className='tg-03to'>{seceretary.name}<br/></td>
								<td className='tg-03to'>{secretary.post} Secretary</td>
								<td className='tg-03to'>{secretary.email}</td>
								<td className='tg-03to'></td>
								<td className='tg-kr4b'>{index===0 && hostel.warden}</td>
								<td className='tg-03to'>{index===0 && hostel.warden_email}</td>
							</tr>

              })}
              </>
              })}
							
						</tbody>
					</table>
				</div>
			</section>
}
export default function Contact() {
  const isActiveDefault = {
    technical: 0,
    research: 0,
    cultural: 0,
    sports: 0,
    literary: 0,
    hostel: 0,
  };
  const [isActive, setIsActive] = useState({
    ...isActiveDefault,
    technical: 1,
  });
  const handleClick = (e) => {
    let temp = { ...isActiveDefault };
    temp[e.target.previousSibling.id] = 1;
    setIsActive(temp);
  };

  return (
    <div className="contactgym">
      <Navbar activeclassName="more" />
      <section className="probootstrap-section probootstrap-section-colored">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left section-heading probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animatedd fadeInUp probootstrap-animate fadeInUp probootstrap-animated fadeInUp probootstrap-animate fadeInUp probootstrap-animateddd">
              <h2>Contacts</h2>
            </div>
          </div>
        </div>
      </section>
      <main>
        <input
          id="technical"
          type="radio"
          name="tabs"
          checked={isActive["technical"]}
        />
        <label htmlFor="technical" onClick={handleClick}>
          Technical Society{" "}
        </label>

        <input
          id="cultural"
          type="radio"
          name="tabs"
          checked={isActive["cultural"]}
        />
        <label htmlFor="cultural" onClick={handleClick}>
          Cultural Society
        </label>

        <input
          id="literary"
          type="radio"
          name="tabs"
          checked={isActive["literary"]}
        />
        <label htmlFor="literary" onClick={handleClick}>
          Literary Society
        </label>

        <input
          id="sports"
          type="radio"
          name="tabs"
          checked={isActive["sports"]}
        />
        <label htmlFor="sports" onClick={handleClick}>
          Sports Society
        </label>

        <input
          id="hostel"
          type="radio"
          name="tabs"
          checked={isActive["hostel"]}
        />
        <label htmlFor="hostel" onClick={handleClick}>
          Hostels
        </label>

        <input
          id="research"
          type="radio"
          name="tabs"
          checked={isActive["research"]}
        />
        <label htmlFor="research" onClick={handleClick}>
          Research
        </label>
        {/* change data dynamically */}
        <section>
          <br />
          <div align="center">
            <p>
              Science & Technology Council : Dr. Srikant Srinivasan (Advisor)
            </p>
          </div>
          <div style={{ overflowX: "scroll" }}>
            <table className="table">
              <tbody>
                <tr>
                  <th className="tg-i6ua">
                    Name of Club
                    <br />
                  </th>
                  <th className="tg-03to">E-mail Id of Club</th>
                  <th className="tg-03to">
                    Club Coordinator
                    <br />
                  </th>
                  <th className="tg-03to">E-mail Id</th>
                  <th className="tg-03to">Contact No.</th>

                  <th className="tg-kr4b">Faculty Advisors</th>
                </tr>

                {/* <!-- PC --> */}
                <tr>
                  <td className="tg-i6ua">
                    Programming Club
                    <br />
                  </td>
                  <td className="tg-03to">pc@iitmandi.ac.in</td>
                  <td className="tg-03to">
                    Subhash Suman
                    <br />
                  </td>
                  <td className="tg-03to">b18088@students.iitmandi.ac.in</td>
                  <td className="tg-03to">7703813759</td>

                  <td className="tg-kr4b">Dr. Sreelakshmi Manjunath</td>
                </tr>
                <tr>
                  <td className="tg-i6ua">
                    <br />
                  </td>
                  <td className="tg-03to"></td>
                  <td className="tg-03to">
                    Saransh Jain
                    <br />
                  </td>
                  <td className="tg-03to">b18191@students.iitmandi.ac.in</td>
                  <td className="tg-03to">7300067222</td>

                  <td className="tg-kr4b"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="content1">
          <div align="center">
            <p>
              Science & Technology Council : Dr. Srikant Srinivasan (Advisor)
            </p>
          </div>
          <div style={{ overflowX: "scroll" }}>
            <table className="table">
              <tbody>
                <tr>
                  <th className="tg-i6ua">
                    Name of Club
                    <br />
                  </th>
                  <th className="tg-03to">E-mail Id of Club</th>
                  <th className="tg-03to">
                    Club Coordinator
                    <br />
                  </th>
                  <th className="tg-03to">E-mail Id</th>
                  <th className="tg-03to">Contact No.</th>

                  <th className="tg-kr4b">Faculty Advisors</th>
                </tr>

                {/* <!-- PC --> */}
                <tr>
                  <td className="tg-i6ua">
                    Programming Club
                    <br />
                  </td>
                  <td className="tg-03to">pc@iitmandi.ac.in</td>
                  <td className="tg-03to">
                    Subhash Suman
                    <br />
                  </td>
                  <td className="tg-03to">b18088@students.iitmandi.ac.in</td>
                  <td className="tg-03to">7703813759</td>

                  <td className="tg-kr4b">Dr. Sreelakshmi Manjunath</td>
                </tr>
                <tr>
                  <td className="tg-i6ua">
                    <br />
                  </td>
                  <td className="tg-03to"></td>
                  <td className="tg-03to">
                    Saransh Jain
                    <br />
                  </td>
                  <td className="tg-03to">b18191@students.iitmandi.ac.in</td>
                  <td className="tg-03to">7300067222</td>

                  <td className="tg-kr4b"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
