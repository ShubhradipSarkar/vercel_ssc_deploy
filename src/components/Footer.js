// import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBIcon,
//   MDBInput,
//   MDBCol,
//   MDBRow,
//   MDBRipple
// } from 'mdb-react-ui-kit';
// import './style.css'

// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
// export default function Footer() {
//   return (
//     <MDBFooter className='text-center text-white' style={{ backgroundColor: '#caced1' }}>
//       <MDBContainer className='p-4'>
//         <section className=''>
//           <MDBRow>
//             <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
//               <MDBRipple
//                 rippleColor='light'
//                 className='bg-image hover-overlay shadow-1-strong rounded'
//               >
//                 <img src={require('../../src/images/LOGO.png')} className='w-100' />
//                 <a href='#!'>
//                   <div
//                     className='mask'
//                     style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
//                   ></div>
//                 </a>
//               </MDBRipple>
//             </MDBCol>
//             <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
//               <MDBRipple
//                 rippleColor='light'
//                 className='bg-image hover-overlay shadow-1-strong rounded'
//               >
//                 <img src={require('../../src/images/plnt000.jpg')} className='w-100' />
//                 <a href='#!'>
//                   <div
//                     className='mask'
//                     style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
//                   ></div>
//                 </a>
//               </MDBRipple>
//             </MDBCol>
//             <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
//               <MDBRipple
//                 rippleColor='light'
//                 className='bg-image hover-overlay shadow-1-strong rounded'
//               >
//                 <img src={require('../../src/images/gate.jpg')} className='w-100' />
//                 <a href='#!'>
//                   <div
//                     className='mask'
//                     style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
//                   ></div>
//                 </a>
//               </MDBRipple>
//             </MDBCol>
//             <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
//               <MDBRipple
//                 rippleColor='light'
//                 className='bg-image hover-overlay shadow-1-strong rounded'
//               >
//                 <img src={require('../../src/images/grp.jpg')} className='w-100' />
//                 <a href='#!'>
//                   <div
//                     className='mask'
//                     style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
//                   ></div>
//                 </a>
//               </MDBRipple>
//             </MDBCol>
//             <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
//               <MDBRipple
//                 rippleColor='light'
//                 className='bg-image hover-overlay shadow-1-strong rounded'
//               >
//                 <img src={require('../../src/images/world.jpg')} className='w-100' />
//                 <a href='#!'>
//                   <div
//                     className='mask'
//                     style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
//                   ></div>
//                 </a>
//               </MDBRipple>
//             </MDBCol>
//             {/* <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
//               <MDBRipple
//                 rippleColor='light'
//                 className='bg-image hover-overlay shadow-1-strong rounded'
//               >
//                 <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp' className='w-100' />
//                 <a href='#!'>
//                   <div
//                     className='mask'
//                     style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
//                   ></div>
//                 </a>
//               </MDBRipple>
//             </MDBCol> */}
//           </MDBRow>
//         </section>
//       </MDBContainer>

//       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         © 2020 Copyright:
//         <a className='text-white' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//       <div>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon color='secondary' fab icon='fa fa-facebook' />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon color='secondary' fab icon='twitter' />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon color='secondary' fab icon='google' />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon color='secondary' fab icon='instagram' />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon color='secondary' fab icon='linkedin' />
//           </a>
//           <a href='' className='me-4 text-reset'>
//             <MDBIcon color='secondary' fab icon='github' />
//           </a>
//         </div>

//     </MDBFooter>
//   );
// }

import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { AiFillFacebook, AiOutlineYoutube } from 'react-icons/ai';
import { BsInstagram, BsTwitter } from 'react-icons/bs'

export default function App() {
  return (
    <MDBFooter className='footer'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/profile.php?id=100064559477606' role='button'>
            <AiFillFacebook size='2em' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>

            <BsInstagram size='2em' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <BsTwitter size='2em' />

          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.youtube.com/@santipurscienceclub3548' role='button'>
            <AiOutlineYoutube size='2em' />
          </MDBBtn>


        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Address : Tapati Bhawan, 12/1 Gourhari Thakur Lane, Duttapara, Santipur, Nadia, Pin-741404<br/>Developer's contact: shubhradipsarkar@gmail, contact number: +6294537321, NIT Durgapur '24, (junior coordinator) Santipur Science Club
        {/* <a className='text-white' href='https://mdbootstrap.com/'>
           3
        </a> */}
      </div>
    </MDBFooter>
  );
}