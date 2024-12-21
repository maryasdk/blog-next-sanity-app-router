interface GoogleMapIframProps {
  src: string;
  disableFullScreen?: boolean;
}

export default function GoogleMapIframe({
  src,
  disableFullScreen,
}: GoogleMapIframProps) {
  return (
    <div className="relative w-full h-[480px]">
      <iframe src={src} width="100%" height="480"></iframe>
      {disableFullScreen && (
        <div className="absolute w-[120px] h-[45px] top-[1px] right-[1px] z-[100] bg-[#2E312F]"></div>
      )}
    </div>
  );
}
