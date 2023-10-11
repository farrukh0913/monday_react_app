import { useState, useCallback, useContext, useEffect } from "react";
import "../styles/Home.scss";
import { AppContext } from "../AppContext";
import { Loader, Toast } from "monday-ui-react-core";

const Preview = () => {
  const { sharedState, setSharedState } = useContext(AppContext);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  const onCloseCallback = useCallback(() => setSharedState(false), [sharedState]);

  return (
    <div className="contentWrapper">
      <Toast
        open={sharedState}
        type={Toast.types.POSITIVE}
        onClose={onCloseCallback}
        autoHideDuration={5000}
        className="monday-storybook-toast_box">
        Document generated
      </Toast>

      <div className="container">
        {loader ? (
          <div className='loader-container'>
            <Loader className="loader" size={40} />
            <span style={{ marginTop: '13px' }}>Generating preview....</span>
          </div>
        ) : (
            <div>
              <h1 className="pageTitle">lorem ipsum</h1>
              <p className="smallText">
                <i>
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  fugiat necessitatibus odit! Odio iste ipsam tempora..."
              </i>
              </p>
              <p className="tinyText">
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                fugiat necessitatibus odit! Odio iste ipsam tempora..."
            </p>

              <div className="detailSection">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Expedita quis, nobis dolore repellendus nisi explicabo nesciunt
                  impedit quo quos reiciendis deleniti asperiores perferendis
                  placeat laborum dignissimos suscipit temporibus ipsa
                  reprehenderit! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Laboriosam recusandae eligendi sed quam totam
                  eius nisi ipsa et. Facilis, laboriosam minima! Obcaecati eaque
                  ab, autem eveniet dolorum natus minus odio. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Eius veritatis vel
                  doloribus quam atque illum tempora accusantium ullam voluptas
                  nemo? Ipsum vel dignissimos deserunt? Doloremque deserunt
                  asperiores veritatis eum provident. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Expedita quis, nobis dolore
                  repellendus nisi explicabo nesciunt impedit quo quos reiciendis
                  deleniti asperiores perferendis placeat laborum dignissimos
                  suscipit temporibus ipsa reprehenderit! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Laboriosam recusandae
                  eligendi sed quam totam eius nisi ipsa et. Facilis, laboriosam
                  minima! Obcaecati eaque ab, autem eveniet dolorum natus minus
                  odio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eius veritatis vel doloribus quam atque illum tempora
                  accusantium ullam voluptas nemo? Ipsum vel dignissimos deserunt?
                  Doloremque deserunt asperiores veritatis eum provident.
              </p>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Expedita quis, nobis dolore repellendus nisi explicabo nesciunt
                  impedit quo quos reiciendis deleniti asperiores perferendis
                  placeat laborum dignissimos suscipit temporibus ipsa
                  reprehenderit! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Laboriosam recusandae eligendi sed quam totam
                  eius nisi ipsa et. Facilis, laboriosam minima! Obcaecati eaque
                  ab, autem eveniet dolorum natus minus odio. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Eius veritatis vel
                  doloribus quam atque illum tempora accusantium ullam voluptas
                  nemo? Ipsum vel dignissimos deserunt? Doloremque deserunt
                  asperiores veritatis eum provident. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Expedita quis, nobis dolore
                  repellendus nisi explicabo nesciunt impedit quo quos reiciendis
                  deleniti asperiores perferendis placeat laborum dignissimos
                  suscipit temporibus ipsa reprehenderit! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Laboriosam recusandae
                  eligendi sed quam totam eius nisi ipsa et. Facilis, laboriosam
                  minima! Obcaecati eaque ab, autem eveniet dolorum natus minus
                  odio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eius veritatis vel doloribus quam atque illum tempora
                  accusantium ullam voluptas nemo? Ipsum vel dignissimos deserunt?
                  Doloremque deserunt asperiores veritatis eum provident.
              </p>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Expedita quis, nobis dolore repellendus nisi explicabo nesciunt
                  impedit quo quos reiciendis deleniti asperiores perferendis
                  placeat laborum dignissimos suscipit temporibus ipsa
                  reprehenderit! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Laboriosam recusandae eligendi sed quam totam
                  eius nisi ipsa et. Facilis, laboriosam minima! Obcaecati eaque
                  ab, autem eveniet dolorum natus minus odio. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Eius veritatis vel
                  doloribus quam atque illum tempora accusantium ullam voluptas
                  nemo? Ipsum vel dignissimos deserunt? Doloremque deserunt
                  asperiores veritatis eum provident. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Expedita quis, nobis dolore
                  repellendus nisi explicabo nesciunt impedit quo quos reiciendis
                  deleniti asperiores perferendis placeat laborum dignissimos
                  suscipit temporibus ipsa reprehenderit! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Laboriosam recusandae
                  eligendi sed quam totam eius nisi ipsa et. Facilis, laboriosam
                  minima! Obcaecati eaque ab, autem eveniet dolorum natus minus
                  odio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eius veritatis vel doloribus quam atque illum tempora
                  accusantium ullam voluptas nemo? Ipsum vel dignissimos deserunt?
                  Doloremque deserunt asperiores veritatis eum provident.
              </p>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Preview;