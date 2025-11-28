export const ComputerIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    className={className}
  >
    <path d="M384 96l0 224L64 320 64 96l320 0zM64 32C28.7 32 0 60.7 0 96L0 320c0 35.3 28.7 64 64 64l117.3 0-10.7 32L96 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-74.7 0-10.7-32L384 384c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L64 32zm464 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0zm16 64l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
  </svg>
);

export const GPUIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    className={className}
  >
    <g fill="currentColor">
      <path d="M4 8a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m7.5-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" />
      <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5m5.5 4a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M9 8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0" />
      <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5" />
    </g>
  </svg>
);

export const CPUIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={className}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M5 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
      <path d="M9 9h6v6H9zm-6 1h2m-2 4h2m5-11v2m4-2v2m7 5h-2m2 4h-2m-5 7v-2m-4 2v-2" />
    </g>
  </svg>
);

export const MemoryIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M2 5h20a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1v2a1 1 0 0 1-1 1h-7.414l-1-1h-1.172l-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m2 11v1h5.586l1-1zm9.414 0l1 1H20v-1zM7 9H5v3h2zm2 0v3h2V9zm6 0h-2v3h2zm2 0v3h2V9z"
    />
  </svg>
);

export const SataSsdIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 36 36"
    className={className}
  >
    <path
      fill="currentColor"
      d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 22H4V8h28Z"
    />
    <circle cx="6.21" cy="10.25" r="1.25" fill="currentColor" />
    <circle cx="29.81" cy="10.25" r="1.25" fill="currentColor" />
    <circle cx="6.21" cy="25.42" r="1.25" fill="currentColor" />
    <circle cx="29.81" cy="25.42" r="1.25" fill="currentColor" />
    <path
      fill="currentColor"
      d="M10 18.62c1.32.31 1.91.54 1.91 1.22s-.53 1.09-1.55 1.09a4 4 0 0 1-2.71-1.11l-.86 1.06a5 5 0 0 0 3.52 1.34c2 0 3.1-1 3.1-2.52s-1.15-2.05-2.87-2.44c-1.31-.3-1.92-.54-1.92-1.21A1.25 1.25 0 0 1 10 15a3.68 3.68 0 0 1 2.37 1l.81-1.1A4.58 4.58 0 0 0 10 13.69c-1.74 0-3 1.05-3 2.49s1.26 2.04 3 2.44"
    />
    <path
      fill="currentColor"
      d="M17.83 20.93a4 4 0 0 1-2.71-1.11l-.86 1.06a5 5 0 0 0 3.52 1.34c2 0 3.1-1 3.1-2.52s-1.15-2.05-2.88-2.44c-1.31-.3-1.92-.54-1.92-1.21a1.25 1.25 0 0 1 1.4-1.05a3.68 3.68 0 0 1 2.37 1l.81-1.1a4.56 4.56 0 0 0-3.12-1.15c-1.73 0-3 1.05-3 2.49s1.19 2 2.89 2.44c1.32.31 1.91.54 1.91 1.22s-.49 1.03-1.51 1.03"
    />
    <path
      fill="currentColor"
      d="M29.9 18c0-2.41-1.92-4.12-4.64-4.12h-2.9v8.24h2.9C28 22.08 29.9 20.37 29.9 18m-6-2.76h1.56a2.77 2.77 0 1 1 0 5.53h-1.6Z"
    />
  </svg>
);

export const M2SsdIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    className={className}
  >
    <g fill="currentColor">
      <path d="M1.5 4.5A.5.5 0 0 1 2 4h13.5a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5a.5.5 0 0 0 0 1a.5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5h-1A.5.5 0 0 1 0 11V7.5A.5.5 0 0 1 .5 7h1a.25.25 0 0 0 0-.5h-1A.5.5 0 0 1 0 6V5a.5.5 0 0 1 .5-.5zm1 .5a.5.5 0 0 1-.5.5h-.5a1.25 1.25 0 1 1 0 2.5H1v2.5h1a.5.5 0 0 1 .5.5H15V9.415a1.5 1.5 0 0 1 0-2.83V5z" />
      <path d="M4 6.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zM5 7v2h1V7zm3-.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zM9 7v2h3V7z" />
    </g>
  </svg>
);

export const HddIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={className}
  >
    <path
      className="fill-current"
      d="M64 80c-8.8 0-16 7.2-16 16l0 162c5.1-1.3 10.5-2 16-2l384 0c5.5 0 10.9 .7 16 2l0-162c0-8.8-7.2-16-16-16L64 80zM48 320l0 96c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16L64 304c-8.8 0-16 7.2-16 16zM0 320L0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 224 0 96c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-96zm280 48a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
    />
  </svg>
);

export const BoltIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className={className}
  >
    <path
      className="fill-current"
      d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"
    />
  </svg>
);

export const PcCaseIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={className}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" />
      <path d="M15 14h.01M9 6h6m-6 4h6" />
    </g>
  </svg>
);

export const FanIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={className}
  >
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="20" height="20" x="2" y="2" rx="1" />
      <rect width="20" height="20" x="2" y="2" rx="10" />
      <path d="M15 9.5c.5-.333.9-1.7.5-2.5S13.333 5.667 13 5.5m1 5c1.5-2 0-3.5-2.5-5c-1.546-.927 2-1.5 4.5.5c1.875 1.5 1 2.5-2 5.5zm-5.015 3.902c-.5.333-.9 1.7-.5 2.5s2.167 1.333 2.5 1.5m-1-5c-1.5 2 0 3.5 2.5 5c1.546.927-2 1.5-4.5-.5c-1.875-1.5-1-2.5 2-5.5zm-.443-4.458c-.334-.5-1.7-.9-2.5-.5s-1.334 2.166-1.5 2.5m5-1c-2-1.5-3.5 0-5 2.5c-.928 1.546-1.5-2 .5-4.5c1.5-1.875 2.5-1 5.5 2zm3.902 5.014c.333.5 1.7.9 2.5.5s1.333-2.166 1.5-2.5m-5 1c2 1.5 3.5 0 5-2.5c.927-1.546 1.5 2-.5 4.5c-1.5 1.876-2.5 1-5.5-2z" />
      <path
        d="M3.5 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0 17a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm17 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0-17a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3ZM12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);

export const DisplayIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    className={className}
  >
    <path
      className="fill-current"
      d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"
    />
  </svg>
);

export const KeyboardIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    className={className}
  >
    <path
      className="fill-current"
      d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm16 64l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-32zM272 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM368 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM464 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"
    />
  </svg>
);

export const MouseIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    className={className}
  >
    <path
      className="fill-current"
      d="M0 192l176 0L176 0 160 0C71.6 0 0 71.6 0 160l0 32zm0 32L0 352c0 88.4 71.6 160 160 160l64 0c88.4 0 160-71.6 160-160l0-128-192 0L0 224zm384-32l0-32C384 71.6 312.4 0 224 0L208 0l0 192 176 0z"
    />
  </svg>
);

export const MotherboardIcon = ({
  className = "w-6 h-6",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    className={className}
  >
    <g fill="currentColor">
      <path d="M11.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-10 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM5 3a1 1 0 0 0-1 1h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0zm0 1h3v3H5zm6.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
      <path d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2zm1 11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z" />
    </g>
  </svg>
);
