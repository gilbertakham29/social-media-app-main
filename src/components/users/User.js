import { Button, Code, IconButton, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routes";
import Avatar from "components/profile/Avatar";
import { useToggleFollow } from "hooks/posts";
import { FaCheckSquare,FaCheck } from "react-icons/fa";
export default function User({ user }) {
  const { id, username } = user;
 const isFollowed = user.id;
  const config = {
    id,
    isFollowed,
    uid: user?.id,
  };
  const {toggleFollow,isLoading,} = useToggleFollow(config)

  return (
    <VStack
      bg="gray.100"
      shadow="sm"
      rounded="md"
      textAlign="center"
      p="4"
      spacing="3"
    >
      <Avatar user={user} />
      <Code>@{username}</Code>
      <Link>
        <Button
          as={Link}
          to={`${PROTECTED}/profile/${id}`}
          size="sm"
          variant="link"
          colorScheme="teal"
        >
          View Profile
        </Button>
      </Link>
     <IconButton onClick={toggleFollow} isLoading={isLoading}
          size="md"
          colorScheme="blue"
          variant="ghost"
          icon={isFollowed ? <FaCheckSquare /> : <FaCheck />}
          isRound> {isFollowed ? "Follow" : "Following"}</IconButton>
    </VStack>
  );
}
