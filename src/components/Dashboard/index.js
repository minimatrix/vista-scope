
import React, {useState} from "react";

export default () => {

    const [boards, setBoards] = useState([]);

    return (
        <div>
            <h3>Boards</h3>
            <div style={{display:'flex', flexWrap:'wrap', width:'900px'}}>
                {
                    boards.map(board =>
                        <div style={{padding:20, width:200, height:100, margin:10, textAlign:'center',border:'solid red 1px', borderRadius:8}}>{board.name}</div>
                    )
                }
                <div style={{padding:20, width:200, margin:10,textAlign:'center', background:'lightgrey', cursor:'pointer', borderRadius:8}}
                    onClick={()=>setBoards([...boards,{name:'test'}])}
                >Add Board</div>
            </div>

        </div>
    )
};

 