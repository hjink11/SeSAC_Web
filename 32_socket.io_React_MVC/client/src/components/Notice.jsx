export default function Notice({ chat }) {
  //{chat}:{chat:{type:String; content:string}}
  return <div className="notice">{chat.content}</div>;
}
