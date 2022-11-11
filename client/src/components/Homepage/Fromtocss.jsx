import styled from 'styled-components'
export const Fromtocss = styled.div`
// height: 125px;
// display: flex;
// grid-template-columns: 1fr 1fr;
// flex-direction: row;
// justify-content: space-between;
*{
    font-family: Raleway;
}
.fromtodiv {
    display:flex;
    text-align: center;
    height: 100%;
    justify-content: center;
    flex-grow: 1;
}
h3{
    position : relative;
    top: -10px;
    left: 12px;
    font-size: 16px;
    font-weight: 500;
}
.location-heading{
    font-size: 20px;
}
.select-heading{
    font-size: 16px;
}
.list-options{
    font-size: 13px;
}
.fromtodiv div{
    // border-right: 0.01em solid #d4d0d0;
    padding-right: 80px;
    height:100%;
    text-align: center;
}
.fromtodiv select {
    padding:4%;
    width:100%;
    font-size:25px;
    font-weight:bold;
    border: none;
    position : relative;
    top: -25px;
    -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}
.fromtodiv2 {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 107%;
}
.date{
    border:none;
    padding-bottom: 10px;
    border-radius: 5px;
    // border-bottom: #aaa 0.1px solid;
    font-size: 16px;
    margin-left: 10px;
}
.fromtodiv2 div{
    border-left: 0.01em solid #d4d0d0;
    border-right: 0.01em solid #d4d0d0;
    height:89%;
    flex-grow: 1;
}
.fromtodiv2 select {
    padding:4%;
    width:100%;
    font-size:25px;
    font-weight:bold;
    border: none;
    position : relative;
    top: -19px;
    -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}

/////////////////////////////////////////////////////////////////////////

width: 87%;
margin: auto;
margin-top:20px;
border: 0.01em solid #d4d0d0;
border-radius: 8px;
display: flex;

.location-div{
    flex-grow:1.5;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
}

.location-inner-div{
}

.location-heading{
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 9px;
    margin-left: -30px;
    color: #444;
}

.location-select{
    font-size: 18px;
    padding: 10px;
    border-radius: 5px;
    border: 0;
    border-bottom: #aaa 0.1px solid;
    margin-bottom: 20px;
}

.option{
    font-size: 14px;
}

.date-div{
    flex-grow:1;
    border-left: #d4d0d0 0.01px solid;
    width: 100;
    text-align: center;
    display: flex;
    // padding-top: 20px;
}

.date-inp{
    padding:5px;
}

.date-1{
    min-width: 200px;
    max-width: 300px;
    flex-grow: 1;
    margin-top:25px;
    // border-right: #d4d0d0 0.1px solid;
}

.date-2{
    flex-grow: 1;
    padding-top:20px;
    border-left: #d4d0d0 0.1px solid;
}

.datepicker{
    position: relative;
}

.choose-btn{
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
    left: 0;
    top: 0;
    z-index: 22;
}

.date{
    width: fit-content;
    border: none;
    margin-left: px;
    cursor: pointer;
}

`