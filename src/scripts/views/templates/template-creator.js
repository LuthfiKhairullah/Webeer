const DetailJobsSkeleton = (count) => {
  let template = '';
  for (let i = 0; i < count; i += 1) {
    template += `
    <div class= "card-item">
    </div>`;
  }
  return template;
};

// eslint-disable-next-line import/prefer-default-export
export { DetailJobsSkeleton };
