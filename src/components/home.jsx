import { Link } from "react-router-dom";
import convertImg from "./img/undraw_convert_re_l0y1.svg"
function Home() {
  return (
    <div>
      <div className="zero">
				<img src={convertImg} alt="Bot" className="mx-auto" />
				<div className="content align-self-center">
					<h2 className="title">IMG TO PDF</h2>
					<p className="description">The Img to PDF Bot web is a convenient online tool for converting images to PDF files. Users can easily upload their image files and convert them into PDF documents with just a few clicks. The bot offers a user-friendly interface and efficient conversion process, saving time and effort. It's a reliable solution for anyone needing to convert multiple images into PDFs quickly.</p>
					<button className="text-white bg-primary border-0 px-3 py-2 pointer"
					onClick={() => {
						window.location.href = '/convert-img-to-pdf';
					}}>
						Try Now
					</button>
				</div>
			</div>
    </div>
  );
}

export default Home;
