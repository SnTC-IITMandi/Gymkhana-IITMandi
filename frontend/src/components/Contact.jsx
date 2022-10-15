import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Navbar from "./Navbar";

function Hostel({ hostels }){
  return <section id="content">
				<div align="center">
				</div>
				<div style={{overflowX: "scroll"}}>
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
              {hostels.map((hostel, hostelIndex)=>{
                return<React.Fragment key={hostelIndex}>
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
                return <tr key={index}>
								<td className='tg-i6ua'>{index===0 && hostel.hostel_name}<br/></td>
								<td className='tg-03to'>{secretary.name}<br/></td>
								<td className='tg-03to'>{secretary.post} Secretary</td>
								<td className='tg-03to'>{secretary.email}</td>
								<td className='tg-03to'></td>
								<td className='tg-kr4b'>{index===0 && hostel.warden}</td>
								<td className='tg-03to'>{index===0 && hostel.warden_email}</td>
							</tr>

              })}
              </React.Fragment>
              })}
							
						</tbody>
					</table>
				</div>
			</section>
}
function Society({ society }) {
  return (
      <section id="content">
        <br />
        <div align="center">
          <p>{`${society.council_name} : ${society.advisor_name} (Advisor)`}</p>
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
              {/* clubs */}
              {society.clubs.map((club, clubIndex) => {
                return (
                  <React.Fragment key={clubIndex}>
                    {club.coordinators.map((coordinator, index) => {
                      return (
                        <tr key={index}>
                          <td className="tg-i6ua">
                            {index === 0 && club.name}
                            <br />
                          </td>
                          <td className="tg-03to">
                            {index === 0 && club.email}
                          </td>
                          <td className="tg-03to">
                            {coordinator.name}
                            <br />
                          </td>
                          <td className="tg-03to">{coordinator.email}</td>
                          <td className="tg-03to">{coordinator.contact}</td>

                          <td class="tg-kr4b">
                            {index === 0 && club.faculty_advisor}
                          </td>
                        </tr>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
  );
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [activeElement, setActiveElement] = useState();
  const [society, setSociety] = useState(undefined);

  const isActiveDefault = {
    technical: 0,
    research: 0,
    cultural: 0,
    sports: 0,
    literary: 0,
    hostel: 0,
  };
  
  let type = searchParams.get("type");
  if(!Object.keys(isActiveDefault).includes(type)){
    // passed parameter not included
    type = "technical";
  }

  let initial = {...isActiveDefault};
  initial[type] = 1;
  const [isActive, setIsActive] = useState(initial);

  const handleClick = (e) => {
    let temp = { ...isActiveDefault };
    temp[e.target.previousSibling.id] = 1;
    setIsActive(temp);
    setSociety(undefined)
  };

  useEffect(() => {
    //update society here
    const temp = Object.keys(isActive).find((key) => isActive[key] === 1);
    setActiveElement(temp);
    const fun = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKENDURL}/society/${temp}`
        );
        const data = await response.json();
        setSociety(data.data);
      } catch (err) {
        setSociety(undefined);
        console.log(err);
      }
    };
    fun();
  }, [isActive]);

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
        
        {(activeElement === "technical" && !!society) && <Society society={society} />}
        {(activeElement === "research"  && !!society) && <Society society={society} />}
        {(activeElement === "cultural"  && !!society) && <Society society={society} />}
        {(activeElement === "literary"  && !!society) && <Society society={society} />}
        {(activeElement === "hostel"  && !!society) && <Hostel hostels={society} />}
        
        
      </main>
    </div>
  );
}
