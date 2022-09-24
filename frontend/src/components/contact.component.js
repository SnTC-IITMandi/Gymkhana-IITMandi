import React, {useState} from 'react';
// import styles from './contact.css';
import Navbar from './navbar.component';

export default function Contact() {
	const isActiveDefault = {
		technical: 0,
		research: 0,
		cultural: 0,
		sports: 0,
		literary: 0,
		hostel: 0,
	  };
	  const [isActive, setIsActive] = useState({...isActiveDefault, technical:1})
	  const handleClick = (e) =>{
		let temp = {...isActiveDefault}
		temp[e.target.previousSibling.id] = 1
		setIsActive(temp)
	  }

	return (

		<div className = "contactgym">
			<Navbar activeClass="more" />
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

			<input id="technical" type="radio" name="tabs" checked={isActive["technical"]}/>
			<label for="technical" onClick={handleClick}>Technical Society </label>

			<input id="cultural" type="radio" name="tabs" checked={isActive["cultural"]}/>
			<label for="cultural" onClick={handleClick}>Cultural Society</label>

			<input id="literary" type="radio" name="tabs" checked={isActive["literary"]}/>
			<label for="literary" onClick={handleClick}>Literary Society</label>

			<input id="sports" type="radio" name="tabs" checked={isActive["sports"]}/>
			<label for="sports" onClick={handleClick}>Sports Society</label>

			<input id="hostel" type="radio" name="tabs" checked={isActive["hostel"]}/>
			<label for="hostel" onClick={handleClick}>Hostels</label>

			<input id="research" type="radio" name="tabs" checked={isActive["research"]}/>
			<label for="research" onClick={handleClick}>Research</label>
			{/* change data dynamically */}
			<section>
			<br/>
				<div align="center">
					<p>Science & Technology Council : Dr. Srikant Srinivasan (Advisor)
					</p>
				</div>
				<div style={{overflowX: "scroll"}}>
					<table className="table">
						<tbody>
							<tr>
								<th className='tg-i6ua'>Name of Club<br/></th>
								<th className='tg-03to'>E-mail Id of Club</th>
								<th className='tg-03to'>Club Coordinator<br/></th>
								<th className='tg-03to'>E-mail Id</th>
								<th className='tg-03to'>Contact No.</th>

								<th className='tg-kr4b'>Faculty Advisors</th>
							</tr>

							{/* <!-- PC --> */}
							<tr>
								<td className='tg-i6ua'>Programming Club<br/></td>
								<td className='tg-03to'>pc@iitmandi.ac.in</td>
								<td className='tg-03to'>Subhash Suman<br/></td>
								<td className='tg-03to'>b18088@students.iitmandi.ac.in</td>
								<td className='tg-03to'>7703813759</td>

								<td className='tg-kr4b'>Dr. Sreelakshmi Manjunath</td>
							</tr>
							<tr>
								<td className='tg-i6ua'><br/></td>
								<td className='tg-03to'></td>
								<td className='tg-03to'>Saransh Jain<br/></td>
								<td className='tg-03to'>b18191@students.iitmandi.ac.in</td>
								<td className='tg-03to'>7300067222</td>

								<td className='tg-kr4b'></td>
							</tr>
							</tbody>
							</table>
							</div>
							</section>

							<section id="content1">
				<div align="center">
					<p>Science & Technology Council : Dr. Srikant Srinivasan (Advisor)
					</p>
				</div>
				<div style={{overflowX: "scroll"}}>
					<table className="table">
						<tbody>
							<tr>
								<th className='tg-i6ua'>Name of Club<br/></th>
								<th className='tg-03to'>E-mail Id of Club</th>
								<th className='tg-03to'>Club Coordinator<br/></th>
								<th className='tg-03to'>E-mail Id</th>
								<th className='tg-03to'>Contact No.</th>

								<th className='tg-kr4b'>Faculty Advisors</th>
							</tr>

							{/* <!-- PC --> */}
							<tr>
								<td className='tg-i6ua'>Programming Club<br/></td>
								<td className='tg-03to'>pc@iitmandi.ac.in</td>
								<td className='tg-03to'>Subhash Suman<br/></td>
								<td className='tg-03to'>b18088@students.iitmandi.ac.in</td>
								<td className='tg-03to'>7703813759</td>

								<td className='tg-kr4b'>Dr. Sreelakshmi Manjunath</td>
							</tr>
							<tr>
								<td className='tg-i6ua'><br/></td>
								<td className='tg-03to'></td>
								<td className='tg-03to'>Saransh Jain<br/></td>
								<td className='tg-03to'>b18191@students.iitmandi.ac.in</td>
								<td className='tg-03to'>7300067222</td>

								<td className='tg-kr4b'></td>
							</tr>
							</tbody>
							</table>
							</div>
							</section>


			</main>


			

		</div>
	);
}
