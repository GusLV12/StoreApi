export const getAllProducts = async (req, res) => {
  console.log('Fetching all products -> ', res.status(200).json({ message: 'All products fetched successfully' }));
};
