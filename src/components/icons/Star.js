const Star = (props) => {
  let fillColor = '';
  if (props.filled) {
    fillColor = 'red';
  } else if (props.half) {
    fillColor = 'url(#half)';
  }

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='#DFDFDF'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <linearGradient id='half' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset='50%' stopColor='red' />
          <stop offset='50%' stopColor='#DFDFDF' />
        </linearGradient>
      </defs>
      <path
        d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
        fill={fillColor}
      />
    </svg>
  );
};

export default Star;
