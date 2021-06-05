/* 
A combinator is something that explains the relationship between the selectors.<br>
There are four different combinators in CSS:

descendant selector (space)<br>
child selector (>)<br>
adjacent sibling selector (+)<br>
general sibling selector (~)<br>

 */
 
 /* The descendant selector matches all elements that are descendants of a specified element. */
 
 div p {
  background-color: yellow;
}

 /* The child selector selects all elements that are the children of a specified element. */

 div > p {
    background-color: yellow;
  }

/* The adjacent sibling selector is used to select an element that is directly after another specific element.*/

  div + p {
    background-color: yellow;
  }


  /* The general sibling selector selects all elements that are siblings of a specified element.*/<br>
   div ~ p {
    background-color: yellow;
  }
