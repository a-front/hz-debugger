import {Button, Form, Input, Select, List, Timeline, Row, Col, message} from "antd"
import './App.css';
const Option = Select.Option;
const prefixSelector = (
  <Form.Item name="protocol" noStyle>
    <Select style={{ width: 90 }}>
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  </Form.Item>
);
function App() {
  const [form] = Form.useForm();
  function handleSubmit() {
    const {protocol, url} = form.getFieldsValue()
    console.log(protocol + url)
    if(!window.electron) {
      message.error("请在electron环境下运行")
    }
  }

  return (
    <div className="App">
      
      <section style={{
        marginTop: "100px",
      }}>
        {/* <Row>
          <Col span={12} >
            <Form 
              title="调试地址" 
              layout="inline"
              form={form}
              initialValues={{protocol: "http://"}}
              onFinish ={handleSubmit}
            >
              <Form.Item 
                name="url"
                placeholder="请输入调试地址"
                rules={[{
                  required: true,
                  message: "请输入调试地址",
                }]}
              >
                <Input 
                  style={{width: "450px"}}
                  addonBefore={prefixSelector}
                  placeholder="请输入调试地址" 
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">确定</Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={12} >

          </Col>
        </Row> */}

      </section>
      <Timeline 
        items={[
          {children: "下载调试工具! "},
          {children: "启动本地开发服务, eg: localhost:3000"},
          {children: "打开调试工具, 并在输入框中输入你要调试的地址, 如: 上一步的 localhost:3000 "},
          {children: "调试工具会跳转到你的页面, 并打开调试面板(和chrome调试面板一样)"},
          {children: "其余的调试操作, 请参考chrome调试面板的使用方法"}
        ]}
      />
      <List 
        bordered
        header="调试小提示" 
        style={{marginTop: "100px", width: "450px"}}
      >  
        <List.Item>1. 可以在 view 菜单中打开/关闭 chrome 调试面板</List.Item>
        <List.Item>2. 如您需要使用打印功能, 建议您使用这个
          <a target="_blank" rel="noreferrer"
            href="https://www.npmjs.com/package/eprint-electron">打印工具</a>
        </List.Item>
      </List>

    </div>
  );
}

export default App;
