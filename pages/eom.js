export const EOM = ({ employee }) => {

    console.log(employee)
 return (
     <div className='page-container'>
         <div>
             <h1>Employee of the Month</h1>

         </div>
     </div>
 )
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch ('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',)

    const employee = await apiResponse.json();

    return {
        props: {
            employee
        }
    }
}



export default EOM;