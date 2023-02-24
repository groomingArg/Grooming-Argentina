import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import s from "./CreateBlog.module.css"

const CreateNew = () => {

  const [validated, setValidated] = useState(false);

  const [formBlog, setFormBlog] = useState({
    title: "",
    subtitle: "",
    content: ""
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormBlog({ ...formBlog, [name]: value })
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios.post("http://localhost:3500/blog", formBlog)
        .then(res => {
          alert("Creado");
        })
        .catch((error) => {
            console.log(error);
          alert("Fallo");
        });
    }
    setValidated(true);
  };

  return (<>
    <div className={s.container1}>
      <span>Crear Blog</span>
    </div>
    <div class="container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              required
              type="text"
              value={formBlog.title}
              name="title"
              onChange={changeHandler}
            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Subtitulo</Form.Label>
            <Form.Control
              required
              type="text"
              value={formBlog.subtitle}
              name="subtitle"
              onChange={changeHandler}
            />
            <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group className="mb-3" controlId="validationCustom05">
            <Form.Label>Contenido del Blog</Form.Label>
            <Form.Control as="textarea" rows={3} required value={formBlog.content} name="content" onChange={changeHandler} />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese el contenido del blog.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Acepta que la información se encuentra correcta."
            feedback="Por favor valide que la información se encuentre correcta."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Crear</Button>
      </Form>
    </div>
  </>);
}

export default CreateNew;