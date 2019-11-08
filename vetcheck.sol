pragma solidity^0.4.0;

contract VetCheck {
  uint weight;
  uint height;
  bytes32 name;
  uint8 dateAntiParasiticDay;
  uint8 dateAntiParasiticMonth;
  uint16 dateAntiParasiticYear;

  uint8 dateAntiRabiesDay;
  uint8 dateAntiRabiesMonth;
  uint16 dateAntiRabiesYear;


  function setName(bytes32 x) {
     name= x;
  }
  function getName() constant returns (bytes32) {
    return name;
  }  
  function setHeight(uint x) {
     height= x;
  }
  function getHeight() constant returns (uint) {
   return height;
  }
  function setWeight(uint x) {
     weight= x;
  }
  function getWeight() constant returns (uint) {
   return weight;
  }
    function setWeightAndHeight(uint w,uint h) {
     weight= w;
     height= h;
  }
  function getWeightAndHeight() constant returns (uint w,uint h) {
    w=weight;
    h=height;
  }
  function setDateAntiRabies(uint8 d, uint8 m,uint16 y) {
    dateAntiRabiesDay=d;
    dateAntiRabiesMonth=m;
    dateAntiRabiesYear=y;
  }
  function getDateAntiRabies() constant returns (uint8 d, uint8 m,uint16 y){
    d=dateAntiRabiesDay;
    m=dateAntiRabiesMonth;
    y=dateAntiRabiesYear;
  }
  
  function setDateParasitic(uint8 d, uint8 m,uint16 y) {
    dateAntiParasiticDay=d;
    dateAntiParasiticMonth=m;
    dateAntiParasiticYear=y;
  }
  function getDateParasitic() constant returns (uint8 d, uint8 m,uint16 y){
    d=dateAntiParasiticDay;
    m=dateAntiParasiticMonth;
    y=dateAntiParasiticYear;
  }
}

