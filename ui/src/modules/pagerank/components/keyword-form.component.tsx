import React, { useState } from "react";

import SvgIcon, {
  SvgIconTypes,
} from "../../common/components/svg-icon.component";
import TagInput from "../../common/components/tag-input";

/**
 * Interface defining the shape of props for the KeywordForm component
 */
interface I_KeywordFormComponentProps {
  handleSubmit: Function;
  keywords: Array<string>;
}

const KeywordForm = (props: I_KeywordFormComponentProps) => {
  const { handleSubmit, keywords } = props;
  const [_keywords, setKeywords] = useState(keywords);

  return (
    <div className="">
      <h3 className="font-bold text-sm mb-4">Keywords</h3>
      <TagInput tags={_keywords} setTags={setKeywords} />
      <button
        onClick={() => handleSubmit(_keywords)}
        className="bg-orange-400 hover:bg-orange-600 text-gray-100 font-bold py-2 px-4 mt-2 rounded inline-flex items-center"
      >
        <SvgIcon iconName={SvgIconTypes.CHECK} className="w-4 h-4 mr-2" />
        <span>Save Keywords</span>
      </button>
    </div>
  );
};

export default KeywordForm;
