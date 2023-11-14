import { useDispatch, useSelector } from "react-redux";
import classes from "./SearchBar.module.css";
import Modal from "./UI/Modal";
import { useEffect, useRef } from "react";
import { searchActions } from "../store/search-slice";
import { useRouter } from "next/router";

function SearchBar() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.search.isVisibleSearch);
  const searchRef = useRef(null);
  const router = useRouter();

  function submitSearch(e) {
    e.preventDefault();
    const searchedTitle = searchRef.current.value;
    dispatch(searchActions.setSearchedTitle(searchedTitle));
    router.push("/search");
    searchRef.current.value = "";
    dispatch(searchActions.setSearchVisible());
  }

  useEffect(() => {
    if (isVisible) {
      searchRef.current.focus();
    }
  }, [isVisible]);

  return (
    <Modal open={isVisible} className={isVisible ? "" : classes.closed}>
      <form className={classes.form} onSubmit={submitSearch}>
        <input
          type="text"
          ref={searchRef}
          className={classes.inputText}
          placeholder="Search for movies or tv shows"
        />
      </form>
    </Modal>
  );
}

export default SearchBar;
