import Meals from "@/components/Meals";

export const metadata = {
    title: {
        absolute: "Meals"
    },
    description: "Meals Page"
}

const MealPage = () => {
    
    return (
        <div className='p-12'>
            <h1 className='text-3xl font-semibold text-green-600 text-center'>Choose Your Meals</h1>
            <p>Chose meals of your choice by searching.....</p>
            <Meals />
        </div>
    );
};

export default MealPage;