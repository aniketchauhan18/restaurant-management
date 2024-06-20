function ImgUpload() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    try {
      const response = await fetch(
        "https://api.imgbb.com/1/upload?expiration=600&key=91c50b3db1df89c6de77d817689b221a",
        {
          method: "POST",
          body: formData,
        },
      );
      const data = await response.json();
      if (response.ok) {
        console.log("yes");
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" multiple required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ImgUpload;
