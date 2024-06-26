import axios from "axios"
import { useEffect, useState } from "react";
import MediaCard from "./MediaCard";

export default function BoardList( props ){
    // 1. useState 변수
    const [ boardList , setBoardList ] = useState( [ ] );
    console.log( boardList );

    // 2.
    useEffect( ()=>{
        axios.get( '/board/get.do' )
            .then( response => { console.log(response)
                // 컴포넌트 렌더링된 이후 axios가 데이터를 가져왔어.
                // 그럼 컴포넌트 다시 렌더링(새로고침) 해야 되는데..
                // 서버로 받은 데이터를 setState 넣어주면 재렌더링
                setBoardList( response.data );
            })
            .catch( error => { console.log( error );  })
    } , [ ] )

    return (<>
        <div style={ { display:"flex" , flexWrap : "wrap"} } >
        {
            boardList.map( ( board ) => {
                return (
                    <MediaCard board = { board }/>
                )
            })
        }
        </div>
    </>)
}