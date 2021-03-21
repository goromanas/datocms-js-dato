import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { message, Form as AntForm, Row, Col } from 'antd'
import { TextArea, ButtonWrapper, Input, Select, Checkbox, FormContainer } from './Form.style'
import Button from '../../core/Button/Button'

const { Option } = Select

const Form = ({ className, services, contact, topic, setTopic }) => {
  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      agreement: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Neteisingas el. paštas').required('Prašome įvesti savo el. paštą'),
      agreement: Yup.boolean().required().oneOf([true], 'Prašome sutikti su sąlyga'),
    }),
    onSubmit: async (values) => {
      values['subject'] = topic
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...values,
        }),
      })
        .then(() => {
          message.success('Ačiū! Netrukus su jumis susisieksiu')
          formik.resetForm()
        })
        .catch((error) => message.error('Nepavyko išsiųsti užklausos. Bandykite dar kartą'))
    },
  })
  return (
    <FormContainer
      onSubmit={formik.handleSubmit}
      className={className}
      data-netlify="true"
      name="contact"
      netlify-honeypot="bot-field"
    >
      <Row gutter={16}>
        <Col sm={24} md={24} lg={12}>
          <input type="hidden" name="form-name" value="contact" />

          <AntForm.Item
            validateStatus={
              formik.touched.name && formik.errors.name ? 'error' : !formik.errors.name
            }
            hasFeedback={formik.touched.name && !formik.errors.name}
            help={formik.errors.name}
          >
            <Input
              allowClear
              required
              id="name"
              name="name"
              type="text"
              placeholder="Vardas"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              rules={formik.touched.name && formik.errors.name}
            />
          </AntForm.Item>
        </Col>
        <Col sm={24} md={12} lg={12}>
          <AntForm.Item
            validateStatus={formik.touched.email && formik.errors.email ? 'error' : null}
            help={formik.errors.email}
          >
            <Input
              placeholder="El. paštas"
              allowClear
              required
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </AntForm.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col sm={24} md={12} lg={12}>
          <AntForm.Item
            validateStatus={formik.touched.phone && formik.errors.phone ? 'error' : null}
            help={formik.errors.phone}
          >
            <Input
              placeholder="Telefono Nr."
              allowClear
              maxLength="10"
              id="phone"
              name="phone"
              type="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
          </AntForm.Item>
        </Col>
        <Col sm={24} md={12} lg={12}>
          <AntForm.Item>
            <Select
              placeholder="Dominanti paslauga"
              className="custom-select"
              value={topic || null}
              onSelect={(e) => setTopic(e)}
            >
              {services.map((service) => (
                <Option value={service.node.title} key={service.node.id}>
                  {service.node.title}
                </Option>
              ))}
            </Select>
          </AntForm.Item>
        </Col>
      </Row>
      <AntForm.Item
        validateStatus={formik.touched.phone && formik.errors.phone ? 'error' : null}
        help={formik.errors.phone}
      >
        <TextArea
          placeholder="Jūsų žinutė"
          maxLength={2000}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          name="message"
        />
      </AntForm.Item>
      <ButtonWrapper>
        <AntForm.Item
          validateStatus={formik.touched.agreement && formik.errors.agreement ? 'error' : null}
          help={formik.errors.agreement}
        >
          <Checkbox
            checked={formik.values.agreement}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="agreement"
          >
            {contact.agreement}
          </Checkbox>
        </AntForm.Item>
        <Button type="submit" color="white" title={contact.cta} />
      </ButtonWrapper>
    </FormContainer>
  )
}

export default Form
