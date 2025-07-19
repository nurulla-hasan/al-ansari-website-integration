
export const getLinkHref = (item) => {
  if (!item || !item.type || !item.id) {
    return '/'; // Return a default path if item is invalid
  }

  switch (item.type) {
    case 'person':
      return `/people/${item.id}`;
    case 'update':
      return `/insights/updates/${item.id}`;
    case 'sector':
      return `/sectors/${item.id}`;
    case 'event':
      return `/insights/events/${item.id}`;
    case 'newsletter':
      return `/insights/newsletters/${item.id}`; 
    default:
      return '/';
  }
};
