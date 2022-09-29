import { useSelector } from "react-redux";
import "./levelComponent.scss"

const LevelComponent =()=>{
    const levelNum = useSelector((state)=>state.currentLevel.currentLevel)
    return(
        <h3 className="levelNum">Level {levelNum}</h3>
    )
}

export default LevelComponent;