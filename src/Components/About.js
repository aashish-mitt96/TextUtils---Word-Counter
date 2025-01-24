import React from "react";

export default function About(props) {
  return (
    <>
      <div className="container">
        <h2 style={{ color: props.mode === "Light" ? "Black" : "White" }}>
          {" "}
          About TextUtils
        </h2>
        <div style={{ color: props.mode === "Light" ? "Black" : "White" }}>
          TextUtils is a ReactJs website built primarily to do various
          operations on regular typed text. TextUtils can convert your text to
          any case in just one simple click of a button. You can
          even remove whitespaces from your scripted documents. It does a
          detailed analyzing of your text, and provides an output of words, and
          characters, along with reading time as well. Also dozens of
          new features will be coming, which definitely makes it a cut
          above the rest.
        </div>
        <br />
        <br />
        <p style={{ color: props.mode === "Light" ? "Black" : "White" }}>
          The most eminent features of the website are as follows :
        </p>

        <div className="accordion" id="accordionExample">
          <div
            style={{
              backgroundColor: props.mode === "Light" ? "White" : "#98AFC7",
            }}
            className="card"
          >
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Analyze Your Text
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                It is a Simple Text Analyzer , which mutilates your text, but in
                a tender way.
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: props.mode === "Light" ? "White" : "#98AFC7",
            }}
            className="card"
          >
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Free to use
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                It is completely free to use. No credit cards required. Use as
                much as you want!!
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: props.mode === "Light" ? "White" : "#98AFC7",
            }}
            className="card"
          >
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Browser Compatible
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                It is compatible with all of your favorite browsers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
