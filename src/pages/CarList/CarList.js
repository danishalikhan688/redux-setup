import React,{useEffect} from "react";
import getCarsAction from "../../redux/action/getCarsAction";
import {useDispatch,useSelector} from "react-redux"
import styles from "./CarList.module.css";
import Card from "../../component/Card/Card"
const CardList=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
   dispatch(getCarsAction())
   // eslint-disable-next-line
    },[])
    const allCars=useSelector((state)=>state.getCarsReducer.carList)
    console.log(allCars,"shsh")
    return(
      <div className="container">
          <div className={styles.list}>
          {
           allCars.map((car, index)=>{
               return <Card car={car}/>
           })
         }
          </div>
      </div>
    );
}
export default CardList;