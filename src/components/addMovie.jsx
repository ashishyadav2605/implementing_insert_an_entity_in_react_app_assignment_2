import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddMovie.css";

const AddMovie = ({ addMovie }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    posterUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert releaseYear to a number before adding the movie
    const newMovie = {
      ...formData,
      releaseYear: parseInt(formData.releaseYear, 10),
    };
    addMovie(newMovie);
    alert("Movie added successfully!");
    // Reset the form
    setFormData({
      title: "",
      director: "",
      genre: "",
      releaseYear: "",
      synopsis: "",
      posterUrl: "",
    });
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="add-movie-container">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit} className="add-movie-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="director"
          placeholder="Director"
          value={formData.director}
          onChange={handleChange}
          required
        />
        <select
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Genre
          </option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Horror">Horror</option>
        </select>
        <input
          type="number"
          name="releaseYear"
          placeholder="Release Year"
          value={formData.releaseYear}
          onChange={handleChange}
          min="1900"
          max={new Date().getFullYear()}
          required
        />
        <textarea
          name="synopsis"
          placeholder="Synopsis"
          value={formData.synopsis}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="url"
          name="posterUrl"
          placeholder="Poster Image URL"
          value={formData.posterUrl}
          onChange={handleChange}
          required
        />
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;