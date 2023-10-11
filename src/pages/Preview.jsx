import { useState, useMemo, useCallback, useContext } from 'react';
import '../styles/Home.scss'
import { AppContext } from '../AppContext';
import { Loader, Toast, Button } from "monday-ui-react-core"
const Preview = () => {
  const { sharedState, setSharedState } = useContext(AppContext);
  const [loader, setLoader] = useState(true)
  setTimeout(() => {
    setLoader(false)
    console.log("i run")
  }, 2000)
  const onCloseCallback = useCallback(() => setSharedState(false), [setSharedState]);
  return (
    <div className="contentWrapper">
      <Toast open={sharedState} type={Toast.types.POSITIVE} onClose={onCloseCallback} autoHideDuration={5000} className="monday-storybook-toast_box">
        Document genrated
      </Toast>
      <div className="container">


        {loader ? <Loader className="loader" size={40} /> : <div>

          <h1 className="pageTitle">lorem ipsum</h1>
          <p className="smallText"><i>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint fugiat necessitatibus odit! Odio iste ipsam tempora..."</i></p>
          <p className="tinyText">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint fugiat necessitatibus odit! Odio iste ipsam tempora..."</p>

          <div className="detailSection">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quis, nobis dolore repellendus nisi explicabo nesciunt impedit quo quos reiciendis deleniti asperiores perferendis placeat laborum dignissimos suscipit temporibus ipsa reprehenderit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae eligendi sed quam totam eius nisi ipsa et. Facilis, laboriosam minima! Obcaecati eaque ab, autem eveniet dolorum natus minus odio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis vel doloribus quam atque illum tempora accusantium ullam voluptas nemo? Ipsum vel dignissimos deserunt? Doloremque deserunt asperiores veritatis eum provident.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quis, nobis dolore repellendus nisi explicabo nesciunt impedit quo quos reiciendis deleniti asperiores perferendis placeat laborum dignissimos suscipit temporibus ipsa reprehenderit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae eligendi sed quam totam eius nisi ipsa et. Facilis, laboriosam minima! Obcaecati eaque ab, autem eveniet dolorum natus minus odio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis vel doloribus quam atque illum tempora accusantium ullam voluptas nemo? Ipsum vel dignissimos deserunt? Doloremque deserunt asperiores veritatis eum provident.
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quis, nobis dolore repellendus nisi explicabo nesciunt impedit quo quos reiciendis deleniti asperiores perferendis placeat laborum dignissimos suscipit temporibus ipsa reprehenderit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae eligendi sed quam totam eius nisi ipsa et. Facilis, laboriosam minima! Obcaecati eaque ab, autem eveniet dolorum natus minus odio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis vel doloribus quam atque illum tempora accusantium ullam voluptas nemo? Ipsum vel dignissimos deserunt? Doloremque deserunt asperiores veritatis eum provident.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quis, nobis dolore repellendus nisi explicabo nesciunt impedit quo quos reiciendis deleniti asperiores perferendis placeat laborum dignissimos suscipit temporibus ipsa reprehenderit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae eligendi sed quam totam eius nisi ipsa et. Facilis, laboriosam minima! Obcaecati eaque ab, autem eveniet dolorum natus minus odio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis vel doloribus quam atque illum tempora accusantium ullam voluptas nemo? Ipsum vel dignissimos deserunt? Doloremque deserunt asperiores veritatis eum provident.
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quis, nobis dolore repellendus nisi explicabo nesciunt impedit quo quos reiciendis deleniti asperiores perferendis placeat laborum dignissimos suscipit temporibus ipsa reprehenderit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae eligendi sed quam totam eius nisi ipsa et. Facilis, laboriosam minima! Obcaecati eaque ab, autem eveniet dolorum natus minus odio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis vel doloribus quam atque illum tempora accusantium ullam voluptas nemo? Ipsum vel dignissimos deserunt? Doloremque deserunt asperiores veritatis eum provident.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quis, nobis dolore repellendus nisi explicabo nesciunt impedit quo quos reiciendis deleniti asperiores perferendis placeat laborum dignissimos suscipit temporibus ipsa reprehenderit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae eligendi sed quam totam eius nisi ipsa et. Facilis, laboriosam minima! Obcaecati eaque ab, autem eveniet dolorum natus minus odio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis vel doloribus quam atque illum tempora accusantium ullam voluptas nemo? Ipsum vel dignissimos deserunt? Doloremque deserunt asperiores veritatis eum provident.
            </p>
          </div>
        </div>}
        {/* <div>
          <h1 className="pageTitle">lorem ipsum</h1>
          <p className="smallText"><i>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint fugiat necessitatibus odit! Odio iste ipsam tempora..."</i></p>
          <p className="tinyText">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint fugiat necessitatibus odit! Odio iste ipsam tempora..."</p>

          <div className="detailSection">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quis, nobis dolore repellendus nisi explicabo nesciunt impedit quo quos reiciendis deleniti asperiores perferendis placeat laborum dignissimos suscipit temporibus ipsa reprehenderit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae eligendi sed quam totam eius nisi ipsa et. Facilis, laboriosam minima! Obcaecati eaque ab, autem eveniet dolorum natus minus odio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis vel doloribus quam atque illum tempora accusantium ullam voluptas nemo? Ipsum vel dignissimos deserunt? Doloremque deserunt asperiores veritatis eum provident.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quis, nobis dolore repellendus nisi explicabo nesciunt impedit quo quos reiciendis deleniti asperiores perferendis placeat laborum dignissimos suscipit temporibus ipsa reprehenderit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae eligendi sed quam totam eius nisi ipsa et. Facilis, laboriosam minima! Obcaecati eaque ab, autem eveniet dolorum natus minus odio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis vel doloribus quam atque illum tempora accusantium ullam voluptas nemo? Ipsum vel dignissimos deserunt? Doloremque deserunt asperiores veritatis eum provident.
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quis, nobis dolore repellendus nisi explicabo nesciunt impedit quo quos reiciendis deleniti asperiores perferendis placeat laborum dignissimos suscipit temporibus ipsa reprehenderit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae eligendi sed quam totam eius nisi ipsa et. Facilis, laboriosam minima! Obcaecati eaque ab, autem eveniet dolorum natus minus odio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis vel doloribus quam atque illum tempora accusantium ullam voluptas nemo? Ipsum vel dignissimos deserunt? Doloremque deserunt asperiores veritatis eum provident.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quis, nobis dolore repellendus nisi explicabo nesciunt impedit quo quos reiciendis deleniti asperiores perferendis placeat laborum dignissimos suscipit temporibus ipsa reprehenderit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae eligendi sed quam totam eius nisi ipsa et. Facilis, laboriosam minima! Obcaecati eaque ab, autem eveniet dolorum natus minus odio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis vel doloribus quam atque illum tempora accusantium ullam voluptas nemo? Ipsum vel dignissimos deserunt? Doloremque deserunt asperiores veritatis eum provident.
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quis, nobis dolore repellendus nisi explicabo nesciunt impedit quo quos reiciendis deleniti asperiores perferendis placeat laborum dignissimos suscipit temporibus ipsa reprehenderit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae eligendi sed quam totam eius nisi ipsa et. Facilis, laboriosam minima! Obcaecati eaque ab, autem eveniet dolorum natus minus odio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis vel doloribus quam atque illum tempora accusantium ullam voluptas nemo? Ipsum vel dignissimos deserunt? Doloremque deserunt asperiores veritatis eum provident.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quis, nobis dolore repellendus nisi explicabo nesciunt impedit quo quos reiciendis deleniti asperiores perferendis placeat laborum dignissimos suscipit temporibus ipsa reprehenderit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam recusandae eligendi sed quam totam eius nisi ipsa et. Facilis, laboriosam minima! Obcaecati eaque ab, autem eveniet dolorum natus minus odio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis vel doloribus quam atque illum tempora accusantium ullam voluptas nemo? Ipsum vel dignissimos deserunt? Doloremque deserunt asperiores veritatis eum provident.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Preview;