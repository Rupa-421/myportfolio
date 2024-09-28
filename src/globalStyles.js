import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Kanit', sans-serif;
}
span{
margin: 10px;
}
a{
text-decoration:none;
color:white;
font-family:'Georgia',serif;
}
button {
  border-top: 1px solid #3a5f7d;
  background: #497ba9;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#6a89cc),
    to(#497ba9)
  );
    box-shadow: 5px 13px 8px -10px rgb(79 151 198 / 67%);
border: transparent;
  background: -webkit-linear-gradient(top, #2057ce, #339DFF);
  background: -moz-linear-gradient(top, #6a89cc, #497ba9);
  background: -ms-linear-gradient(top, #6a89cc, #497ba9);
  background: -o-linear-gradient(top, #6a89cc, #497ba9);
  padding: 10px 20px;
  border-radius: 20px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px;
  -moz-box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px;
  text-shadow: rgba(0, 0, 0, 0.1) 0 1px 0;
  color: white;
  font-size: 15px;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  text-decoration: none;
  vertical-align: middle;
  transition: all 0.3s ease;
}

button:hover {
  background: white;
  // background: -webkit-gradient(
  //   linear,
  //   left top,
  //   left bottom,
  //   from(#4f6d92),
  //   to(#36597d)
  // );
  // background: -webkit-linear-gradient(top, #2057ce, #339DFF);
  // background: -moz-linear-gradient(top, #4f6d92, #36597d);
  // background: -ms-linear-gradient(top, #4f6d92, #36597d);
  // background: -o-linear-gradient(top, #4f6d92, #36597d);
  color: #339DFF;
}

button:active {
  background: #339DFF;
}

a{
color:white;
}
a:hover{
color:#339DFF;
}
`;
