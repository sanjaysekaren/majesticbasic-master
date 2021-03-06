// import data from './bookData.json';

// export const sampleBookData = () =>{
//     return{
//         type:'sampleBookData',
//         payload:data
//     }
// }

export function sampleBookData() {
    return function (dispatch) {
        dispatch({
            type: 'sampleBookData',
            payload: [{
                "bookTitle": "The Monk Who Sold His Ferrari",
                "bookImage": "https://images-na.ssl-images-amazon.com/images/I/51j3ISgpR6L._SX319_BO1,204,203,200_.jpg",
                "catchWord": "A fable about fulfilling your dreams and reaching your destiny",
                "subject": "Philosophy",
                "author": "Robin Sharma",
                "pages": "288",
                "edition": "2012",
                "language": "English",
                "publisher": "Mc's",
                "price": "450",
                "offers": "20%",
                "payment": "COD,Credit Card, Debit Card,UPI",
                "soldBy": "Majestic Book Sellers",
                "productDescription": "Wisdom to Create a Life of Passion, Purpose, and Peace This inspiring tale provides a step-by-step approach to living with greater courage, balance, abundance, and joy. A wonderfully crafted fable, The Monk Who Sold His Ferrari tells the extraordinary story of Julian Mantle, a lawyer forced to confront the spiritual crisis of his out-of-balance life. On a life-changing",
                "reviewAndFeedback": "'The book is about finding out what is truly important to your real spiritual self rather than being inundated with material possessions.” Michelle Yeoh (Crouching Tiger Hidden Dragon) 'A captivating story that teaches as it delights.' Paulo Coelho '[Its] principles have been fascinating and there were shared principles from writers such as Robin Sharma and Deepak Chopra. How does all that impact on a game of rugby? I can’t answer that. All I know is it’s enough to help me to proceed in a way that makes me happy enough to go out there and be proud of who I am and what I hope I can bring to this team.' Jonny Wilkinson"
            }]
        })
    };
}