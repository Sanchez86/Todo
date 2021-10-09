export default class DataService {
  getResource = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Server Error');
    }

    return response.json();
  };

  getAllItems = async () => this.getResource();
}
