import {useQuery} from "react-query";
import {getJokes} from "./react-query/jokes";
import {queryClient} from "./react-query/client";
import LoaderComponent from "./utlis/loader";

function App() {
    const url = "jokes/random";
    const queryKey = "random-jokes"
    const {isLoading, isError, data, error} = useQuery({
        queryKey,
        queryFn: async () => await getJokes(url)
    })
    function getRandomJokes () {
        queryClient.invalidateQueries(queryKey).then(r=>r)
    }
   if(isLoading){
       return (
       <LoaderComponent />
       )
   }
    return (
        <div
            className="min-h-screen grid place-items-center bg-gradient-to-r from-blue-200 via-pink-500  to-yellow-300">
            <div className="space-y-4 flex flex-col items-center">
                <div className=' shadow-md bg-gray-300 p-10 rounded m-6'>
                    <h1 className="text-4xl font-bold hover:text-blue-500">{data?.value.joke}</h1>
                </div>
                <button
                    onClick={getRandomJokes}
                    className="inline-block p-4 text-green-600 rounded-md shadow cursor-pointer duration-300 bg-white w-52">Get
                    random Joke
                </button>
            </div>
        </div>
    );
}

export default App;
