// Content
import Home from './Project/Pages/Home/Home';
// css
import 'bootstrap/dist/css/bootstrap.min.css'
import favico from './Project/Components/img/favico.png';

// Packages
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import './App.scss'
import 'sanitize.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

const siteName = 'Buck me up';
const siteDesc = 'Sample Description';
const siteKeywords = 'Sample Keywords';
const siteType = 'Sample Type';

function App() {

  return (
       
    <div className="App">
    {/* Head */}
    <Helmet>
        {/* Meta Tags */}
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width"/>
        <title>{siteName}</title>
        <link rel="icon" href={favico} />
        <meta name="description" content={siteDesc}/>
        <meta name="keywords" content={siteKeywords}/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

        <meta property="og:title" content={siteName}/>
        <meta property="og:type" content={siteType}/>
        <meta property="og:description" content={siteDesc}/>
        <meta property="og:site_name" content={siteName}/>
    </Helmet>

    <div className="main">
        <RouterProvider router={router} />
    </div>

</div>
  )
}

export default App
