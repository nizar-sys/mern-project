import React from "react";
import { useHistory } from "react-router";
import {
  Button,
  Footer,
  Gap,
  Header,
  Input,
  Link,
  TextArea,
  UploadImg,
} from "../../components";
import "../mainApp/mainApp.scss";
import "./createBlog.scss";

const CreateBlog = () => {
  const history = useHistory()
  return (
    <div className="blog-post">
      <p className="title">Create New Post</p>
      <Input placeholder="Title Post" />
      <UploadImg />
      <TextArea />
      <Gap height={10} />
      <div className="button-action">
        <Button title="Simpan" className="btn btn-success" />
      </div>
      <Gap height={5}/>
      <Button className="btn btn-success" title="Kembali" onClick={()=> history.push('/')}/>
      <Gap height={40} />
    </div>
  );
};

export default CreateBlog;
