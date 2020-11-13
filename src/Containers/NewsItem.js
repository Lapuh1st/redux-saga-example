import React from "react";
import { connect } from "react-redux";

const articleStyle = {
  width: "50%",
  margin: "0 auto",
  color: "olive"
};

let NewsItem = ({ article }) =>
  article ? (
    <div>
      <article style={articleStyle}>
        <div>
          <h1>{article[0].title}</h1>
          <h4>{article[0].id}</h4>
          
        </div>
      </article>
      <article style={articleStyle}>
        <div>
          <h1>{article[1].title}</h1>
          <h4>{article[1].id}</h4>
          
        </div>
      </article>
      <article style={articleStyle}>
        <div>
          <h1>{article[2].title}</h1>
          <h4>{article[2].id}</h4>
          
        </div>
      </article>
    </div>
  ) : null;

const mapStateToProps = state => ({
  article: state.news
});

NewsItem = connect(
  mapStateToProps,
  null
)(NewsItem);

export default NewsItem;
