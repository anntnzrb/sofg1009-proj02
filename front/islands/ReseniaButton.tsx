export function ReseniaButton({ id }: { id: string }) {
  return (
    <button
      onClick={() => {
        window.location.href = `/resenia/${id}`;
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <path
          d="M0.39375 0.04375C0.13125 0.04375 0 0.21875 0 0.4375V25.8563C0 26.075 0.175 26.25 0.39375 26.25H26.25L35 35V0.39375C35 0.13125 34.825 0 34.6063 0H0.4375L0.39375 0.04375Z"
          fill="black"
        />
      </svg>
    </button>
  );
}
