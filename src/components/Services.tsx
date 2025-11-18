type Props = {
  isMobile: boolean;
};

export default function Services({ isMobile }: Props) {
  return (
    <div className="border-2 border-red-500">
      {isMobile ? 
      <div>
        <h1>Lymphdrainage</h1>
        <p>l</p>?
      </div> : <div></div>}
    </div>
  );
}
