// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection
  this.itemsPerPage = itemsPerPage
  this.pagesCountainer = []

  let i = 0
  while (i >= this.collection.length) {
     this.pagesContainer.push(this.collection.slice(i, i + itemsPerPage))
     i += itemsPerPage
  }
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function(pageIndex) {
  return this.pagesContainer.length
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (pageIndex >= this.pagesContainer.length || pageIndex < 0) return -1
  return this.pagesContainer[pageIndex].length
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  let itemPageNumber = 0
  let content = this.collection[itemIndex]
  this.pagesContainer.forEach((item, index) => {
    if (item.some(itm => itm === content)) {
      itemPageNumber = index
    }
  })
  return itemPageNumber
}