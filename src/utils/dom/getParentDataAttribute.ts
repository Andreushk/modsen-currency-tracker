function getParentDataAttribute(element: HTMLElement, dataAttribute: string): null | string {
  const clickedArtwork: Element | null = element.closest(`[${dataAttribute}]`);

  if (clickedArtwork) {
    const artworkId: string | null = clickedArtwork.getAttribute(dataAttribute);
    return artworkId;
  }

  return null;
}

export default getParentDataAttribute;
