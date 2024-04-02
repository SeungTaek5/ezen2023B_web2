import Book from './Book';


export default function Library(props){
    let successData = [
        {name : '강호동', age:25},
        {name : '유재석', age:41},
        {name : '신동엽', age:38}
    ]


    return (

        <div>
            {/* <Book name="처음 만난 파이썬" age={300} />
            <Book name="처음 만난 AWS" age={400} />
            <Book name="처음 만난 리액트" age={500} /> */}


            {
                successData.map((data)=>{
                    return(
                    <Book name={data.name} age={data.age} />
                    );
                })
            }
        </div>
    );

}